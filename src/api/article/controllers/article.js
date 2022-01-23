'use strict';

/**
 *  article controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

const axios = require('axios')

module.exports = createCoreController('api::article.article', ({ strapi }) => ({

    async findOne(ctx) {

        console.log(ctx.request.params.id)

        const data = await strapi.service('api::article.article').findOne(ctx.request.params.id, {
            populate: ['Image', 'users_permissions_user']
        })

        // delete data.users_permissions_user.password

        return data

    },

    async create(ctx) {

        console.log(ctx.request.body)
        // console.log(ctx.request.files['files.Image'])

        //upload files to strapi


        const data = JSON.parse(ctx.request.body.data)

        // data.users_permissions_user = data.users_permissions_user.id

        const file = await axios.post('http://localhost:1337/api/upload', {
            data: ctx
        }).then(e => console.log(e)).catch(e => console.log('error', e))

        // console.log(file)

        // console.log(data)

        // data.Image = ctx.request.files['files.Image']

        // const created = await strapi.service('api::article.article').create({data})

        // return created

    }
}));