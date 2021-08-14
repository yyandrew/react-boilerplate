import { useEffect, useState } from 'react'
import { Modal, Input } from 'antd'

const { TextArea } = Input

function ErrorDialog(props) {
  const [width, setWidth] = useState(100)
  const [height, setHeight] = useState(100)
  const [stringError, setStringError] = useState()

  useEffect(() => {
    setStringError(
      props.error
        ? typeof props.error === 'string'
          ? props.error
          : JSON.stringify(props.error, null, 2)
        : null
    )
  }, [props.error])

  useEffect(() => {
    if (stringError) {
      const lines = stringError.split('\n')
      setHeight(lines.length)
      setWidth(lines.reduce((a, b) => (a < b ? b : a), 100))
    }
  }, [stringError])

  return (
    <Modal
      title={props.title}
      visible={props.error}
      onCancel={props.onClose}
      okText="Copy Error"
      onOk={() => {
        const copyText = document.getElementById('ErrorDialog-error')
        copyText.select()
        document.execCommand('copy')
        props.onClose()
      }}
    >
      <TextArea
        id="ErrorDialog-error"
        style={{ height: height * 14 + 'px', width: width + 'ex' }}
        readOnly={true}
        value={stringError}
      />
    </Modal>
  )
}

export default ErrorDialog
