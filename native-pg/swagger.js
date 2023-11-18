import swaggerJSDoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Twilio Log Alert API',
      description: "A monitoring and alert tool for Node.js API built with Winston and Twilio WhatsApp API",
      contact: {
        name: "Desmond",
        email: "desmond.obisi.g20@gmail.com",
        url: "https://github.com/DesmondSanctity/twilio-log-alert",
      },
      version: '1.0.0',
    },
    servers: [
      {
        url: "http://localhost:5000/",
        description: "Local server"
      }
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        }
      }
    },
    security: [{
      bearerAuth: []
    }],
  },
  // looks for configuration in specified directories
  apis: ['./src/routes/*.js'],
}

const swaggerSpec = swaggerJSDoc(options)

function swaggerDocs(app, port) {
  // Swagger Page
  app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

  // Documentation in JSON format
  app.get('/docs.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    res.send(swaggerSpec)
  })
}

export default swaggerDocs