import React from 'react'
import CreditBatch from './CreditBatch'
import { Grid, Divider } from 'semantic-ui-react'
import SpotifyLoginButton from './SpotifyLoginButton'

const Footer = () => (
  <div style={{ width: '100%', minHeight: '10rem', marginTop: '14px' }}>
    <Grid centered>
      <Grid.Row>
        <Grid.Column width={6}>
          <h1>Lior Cohen</h1>
          <a
            href="mailto:info@leoniko.net?subject=Mail from SAFE FRAME website"
            style={{ color: '#6fef99', cursor: 'pointer' }}
          >
            info@leoniko.net
          </a>
          <Divider hidden />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            dignissimos dolorum dolorem sit eveniet debitis. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Explicabo dignissimos dolorum
            dolorem sit eveniet debitis. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Explicabo
          </p>
          <p style={{ fontSize: '0.8rem' }}>
            Background Photo by :
            <span>
              <CreditBatch />
            </span>
          </p>
        </Grid.Column>
        <Grid.Column width={4} />
        <Grid.Column width={4} verticalAlign="bottom" textAlign="right" >
          <SpotifyLoginButton />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </div>
)

export default Footer
