import React from 'react'
import CreditBatch from './CreditBatch'
import { Grid } from 'semantic-ui-react'
import { secondaryStyle, defaultStyle  } from '../styles/styles'
const Footer = () => (
  <div style={{ width: '100%', minHeight: '10rem', marginTop: '14px' }}>
    <Grid centered padded>
      <Grid.Row>
        <Grid.Column width={6}>
          <h1 style={defaultStyle}>Lior Cohen</h1>
          <a
            href="mailto:info@leoniko.net?subject=Mail from SAFE FRAME website"
            style={{ ...secondaryStyle, cursor: 'pointer' }}
          >
            info@leoniko.net
          </a>
          <div style={{ fontSize: '0.8rem' }}>
            Background Photo by:
            <span>
              <CreditBatch />
            </span>
            <div>
              Icons made by:  
              <a
                style={{...secondaryStyle, marginLeft: '2px'}}
                href="https://www.flaticon.com/authors/dave-gandy"
                title="Dave Gandy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Dave Gandy
              </a>
              from
              <a
                style={secondaryStyle}
                href="https://www.flaticon.com/"
                title="Flaticon"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.flaticon.com
              </a>
              is licensed by
              <a
                style={secondaryStyle}
                href="http://creativecommons.org/licenses/by/3.0/"
                title="Creative Commons BY 3.0"
                target="_blank"
                rel="noopener noreferrer"
              >
                CC 3.0 BY
              </a>
            </div>
          </div>
        </Grid.Column>
        <Grid.Column width={4} />
        <Grid.Column
          width={4}
          verticalAlign="bottom"
          textAlign="right"
          only="computer"
        />
      </Grid.Row>
    </Grid>
  </div>
)

export default Footer
