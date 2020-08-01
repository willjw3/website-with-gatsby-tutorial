module.exports = {
  siteMetadata: {
    title: `Unsolicited Opinions`,
    siteUrl: `https://www.google.com`,
    description: `This is my rant blog. There are many like it, but this one is mine.`
  },
    plugins: [
        `gatsby-plugin-sass`,
        `gatsby-transformer-json`,
        {
          resolve: `gatsby-source-filesystem`,
          options: {
            name: `data`,
            path: `${__dirname}/data/`,
          },
        },
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
              fonts: [
                `limelight`,
                `Rubik`,
                `Raleway`,
                `Special Elite`,
                `source sans pro\:300,400,400i,700` // you can also specify font weights and styles
              ],
              display: 'swap'
            }
          }
    ]
}