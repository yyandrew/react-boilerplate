import { Modal } from 'antd'

const Alert = ({ open, title, message, onOk, onCancel }) => {
  return (
    <Modal title={title} visible={open} onOk={onOk} onCancel={onCancel}>
      {message}
    </Modal>
  )
}

export default Alert
