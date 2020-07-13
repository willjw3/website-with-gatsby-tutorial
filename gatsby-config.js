module.exports = {
    plugins: [
        `gatsby-plugin-sass`,
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