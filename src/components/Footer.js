import React from 'react'
import CreditBatch from './CreditBatch'
import { Grid } from 'semantic-ui-react'

const Footer = () => (
  <div style={{ width: '100%', minHeight: '10rem', marginTop: '14px' }}>
    <Grid centered>
      <Grid.Row>
        <Grid.Column width={14}>
          <h1>Lior Cohen</h1>
          <a
            href="mailto:liorco7079@gmail"
            style={{ color: '#6fef99', cursor: 'pointer' }}
          >
            liorco7079@gmail.com
          </a>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={6}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            dignissimos dolorum dolorem sit eveniet debitis.
          </p>
        </Grid.Column>
        <Grid.Column width={8} />
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={14}>
          <p style={{fontSize:'0.8rem'}}>
            Background Photo by :
            <span>
              <CreditBatch />
            </span>
          </p>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </div>
)

export default Footer
