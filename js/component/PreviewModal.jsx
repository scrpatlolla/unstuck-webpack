import React, {Component} from 'react'
import {connect} from 'react-redux'

import Prism from 'prism/prism'
import $ from 'jquery'

import {NpmConfigurator, WebpackConfigurator, EntrifyConfigurator} from 'configurator'

class PreviewModal extends Component {
  componentDidMount() {
    setTimeout(() => {
      Prism.highlightAll($('.prism'))
    }, 5)
  }

  render() {
    return (
      <div>
        <p>Files containing project settings.</p>
        <strong>index.js</strong>
        <pre className="prism">
          <code className="prism language-javascript">
            {EntrifyConfigurator(this.props.state).idx}
          </code>
        </pre>
        <strong>{this.props.state.config.cssdir}/vendors.</strong>
        <pre className="prism">
          <code className="prism language-javascript">
            {EntrifyConfigurator(this.props.state).vcss}
          </code>
        </pre>
        <strong>package.json</strong>
        <pre className="prism">
          <code className="prism language-json">
            {JSON.stringify(NpmConfigurator(this.props.state), null, 2)}
          </code>
        </pre>
        <strong>webpack.config.js</strong>
        <pre className="prism">
          <code className="prism language-javascript">
            {WebpackConfigurator(this.props.state)}
          </code>
        </pre>
      </div>
      )
  }
}

export default connect(state => ({state}))(PreviewModal)
