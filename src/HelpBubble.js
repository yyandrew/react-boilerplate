import { Popover, Button } from 'antd'

import { useState } from 'react'
import './HelpBubble.css'

function HelpBubble(props) {
  const element = props.forElement
    ? document.querySelector(props.forElement)
    : null

  return element ? (
    <Popover
      className="HelpBubble-container"
      visible={props.open}
      content={
        <div>
          <div className="HelpBubble-close" onClick={props.onClose}>
            Close [x]
          </div>
          {props.content}
          <div className="HelpBubble-controls">
            {props.previousLabel ? (
              <div
                className="HelpBubble-controls HelpBubble-previous"
                onClick={props.onPrevious}
              >
                &lt; {props.previousLabel}
              </div>
            ) : (
              <div>&nbsp;</div>
            )}
          </div>
          <div className="HelpBubble-controls">
            {props.nextLabel ? (
              <div
                className="HelpBubble-controls HelpBubble-next"
                onClick={props.onNext}
              >
                {props.nextLabel} &gt;
              </div>
            ) : (
              <div>&nbsp;</div>
            )}
          </div>
        </div>
      }
    />
  ) : null
}

export default HelpBubble
