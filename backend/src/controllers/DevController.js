const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');
const { findConnections, sendMessage } = require('../websocket');

module.exports = {
    async index(request, response) {
        const devs = await Dev.find();

        return response.json(devs);
    },

    async store(request, response) {
        const {
            github_username,
            techs,
            latitude,
            longitude
        } = request.body;

        let dev = await Dev.findOne({
            github_username
        });

        if (!dev) {
            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);

            let {
                name = login, avatar_url, bio
            } = apiResponse.data;

            const techsArray = parseStringAsArray(techs);

            const location = {
                type: 'Point',
                coordinates: [longitude, latitude],
            };

            dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location,
            });

            const sendSocketMessageTo = findConnections(
                { latitude, longitude },
                techsArray,
            );

            sendMessage(sendSocketMessageTo, 'new-dev', dev);
        }

        return response.json(dev);
    },

    async update(request, response) {
        const {
            github_username,
            name,
            avatar_url,
            bio,
            techs,
            latitude,
            longitude
        } = request.body;

        const techsArray = parseStringAsArray(techs);

        const location = {
            type: 'Point',
            coordinates: [longitude, latitude],
        };

        let dev = await Dev.findOneAndUpdate(github_username, {
            name,
            avatar_url,
            bio,
            techs: techsArray,
            location,
        }, {
            new: true
        });

        return response.json(dev);
    },

    async destroy(request, response) {
        const {
            github_username
        } = request.body;

        await Dev.deleteOne({
            github_username
        });

        return response.json({
            message: 'Desenvolvedor apagado com sucesso!'
        });
    }
};