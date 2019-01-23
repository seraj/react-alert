import React, { Component } from 'react'
import { SimpleAlert, MaterialAlert, IconAlert, DescriptionAlert, Closable, RtlAlert } from './examples/examples'
import Section from './section/section'
export default class App extends Component {
  render() {
    return (
      <div className="container" style={{ marginTop: 20 }}>
        <div className="row">
          <Section
            title="Default Alerts"
            examples={<SimpleAlert demo />}
            code={<SimpleAlert code />}
            details={<SimpleAlert detail />}
          />
          <Section
            title="Material Design"
            examples={<MaterialAlert demo />}
            code={<MaterialAlert code />}
            details={<MaterialAlert detail />}
          />
          <Section
            title="Alert with Icon"
            examples={<IconAlert demo />}
            code={<IconAlert code />}
            details={<IconAlert detail />}
          />
          <Section
            title="Description"
            examples={<DescriptionAlert demo />}
            code={<DescriptionAlert code />}
            details={<DescriptionAlert detail />}
          />
          <Section
            title="Closable Alert"
            examples={<Closable demo />}
            code={<Closable code />}
            details={<Closable detail />}
          />
          <Section
            title="RTL"
            examples={<RtlAlert demo />}
            code={<RtlAlert code />}
            details={<RtlAlert detail />}
          />

        </div>
      </div>
    )
  }
}
