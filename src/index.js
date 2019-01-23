import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './styles.scss'

export default class Alert extends Component {
  constructor(props) {
    super(props)
    this.state = {
      Close: false,
      animation: false
    }
  }
  static propTypes = {
    message: PropTypes.string,
    description: PropTypes.string,
    type: PropTypes.string,
    material: PropTypes.bool,
    rtl: PropTypes.bool,
    icon: PropTypes.bool,
    closable: PropTypes.bool,
    style: PropTypes.object
  }
  onCloseClick = () => {
    this.setState({
      animation: true
    })
    setTimeout(() => {
      this.setState({
        Close: true
      })
    }, 500)
  }
  render() {
    const { Close, animation } = this.state
    var ClassName = styles.ReactAlert
    var _props = this.props
    // var material = _props.material
    // var description = _props.description
    var type = `${ClassName}-${_props.type}`
    // var message = _props.message
    // var icon = _props.icon
    // var closable = _props.closable
    // var style = _props.style
    // var rtl = _props.rtl;
    const { material, description, message, icon, closable, style, rtl } = this.props
    return (
      <React.Fragment>
        {!Close &&
          <div
            className={` ${rtl ? styles.rtl : ``} ${material ? styles.flat : ``} ${ClassName} ${type} ${description ? `${ClassName}-with-description` : ``} ${description && !icon ? `${ClassName}-with-description-no-icon` : ``} ${!icon ? `${ClassName}-no-icon` : ``} ${closable ? `${ClassName}-closable` : ``} ${animation ? `${ClassName}-slide-up-leave` : ``}`}
            style={style}
          >
            {icon && <i className={`${ClassName}-icon ${styles.icon}`}><Icon type={this.props.type} /></i>}
            {message && <span className={`${ClassName}-message ${styles.alert_message} message`}>{this.props.message}</span>}
            {description && <span className={`${ClassName}-description ${styles.alert_description} description`}>{description}</span>}
            {closable &&
              <a
                className={`${ClassName}-close-icon`}
                onClick={this.onCloseClick}
              >
                <Icon type='closeIcon' />
              </a>
            }
          </div>
        }
      </React.Fragment>
    )
  }
}
const Icon = (type) => {
  return (
    <React.Fragment>
      {type && type.type === 'closeIcon' &&
        <svg viewBox='64 64 896 896' data-icon='close' width='1em' height='1em' fill='currentColor' aria-hidden='true'>
          <path d='M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z' />
        </svg>
      }
      {type && type.type === 'info' &&
        <svg viewBox='64 64 896 896' width='1em' height='1em' fill='currentColor' aria-hidden='true'>
          <path d='M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 0 1 0-96 48.01 48.01 0 0 1 0 96z' />
        </svg>
      }
      {type && type.type === 'success' &&
        <svg viewBox='64 64 896 896' width='1em' height='1em' fill='currentColor' aria-hidden='true'>
          <path d='M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z' />
        </svg>
      }
      {type && type.type === 'warning' &&
        <svg viewBox='0 0 483.537 483.537' width='1em' height='1em' aria-hidden='true'>
          <path fill='currentColor' d='M479.963,425.047L269.051,29.854c-5.259-9.88-15.565-16.081-26.782-16.081h-0.03 c-11.217,0-21.492,6.171-26.782,16.051L3.603,425.016c-5.046,9.485-4.773,20.854,0.699,29.974 c5.502,9.15,15.413,14.774,26.083,14.774H453.12c10.701,0,20.58-5.594,26.083-14.774 C484.705,445.84,484.979,434.471,479.963,425.047z M242.239,408.965c-16.781,0-30.399-13.619-30.399-30.399 c0-16.78,13.619-30.399,30.399-30.399c16.75,0,30.399,13.619,30.399,30.399C272.638,395.346,259.02,408.965,242.239,408.965z M272.669,287.854c0,16.811-13.649,30.399-30.399,30.399c-16.781,0-30.399-13.589-30.399-30.399V166.256 c0-16.781,13.619-30.399,30.399-30.399c16.75,0,30.399,13.619,30.399,30.399V287.854z'
          />
        </svg>
      }
      {type && type.type === 'error' &&
        <svg viewBox='0 0 483.537 483.537' width='1em' height='1em' aria-hidden='true'>
          <path fill='currentColor' d='M479.963,425.047L269.051,29.854c-5.259-9.88-15.565-16.081-26.782-16.081h-0.03 c-11.217,0-21.492,6.171-26.782,16.051L3.603,425.016c-5.046,9.485-4.773,20.854,0.699,29.974 c5.502,9.15,15.413,14.774,26.083,14.774H453.12c10.701,0,20.58-5.594,26.083-14.774 C484.705,445.84,484.979,434.471,479.963,425.047z M242.239,408.965c-16.781,0-30.399-13.619-30.399-30.399 c0-16.78,13.619-30.399,30.399-30.399c16.75,0,30.399,13.619,30.399,30.399C272.638,395.346,259.02,408.965,242.239,408.965z M272.669,287.854c0,16.811-13.649,30.399-30.399,30.399c-16.781,0-30.399-13.589-30.399-30.399V166.256 c0-16.781,13.619-30.399,30.399-30.399c16.75,0,30.399,13.619,30.399,30.399V287.854z'
          />
        </svg>

      }

    </React.Fragment>
  )
}
