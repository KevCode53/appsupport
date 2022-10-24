import React, { useEffect, useRef } from 'react';
import 'animate.css';

import './styles.scss'

import { useMessages } from 'hooks/useMessages';

const Message = ( children ) => {

  const {message, setMessage} = useMessages()
  const msgContainer = useRef()

  const typeMsg = () => {
    switch (message.type) {
      case 'error':
        return 'error'
      case 'success':
        return 'success'
      case 'warning':
        return 'warning'
      case 'info':
        return 'info'
      default:
        return 'info'
    }
  }

  useEffect(() => {
      const classInterval = setInterval(() => {
        msgContainer.current.classList.remove('animate__fadeIn')
        msgContainer.current.classList.add('animate__fadeOut')
      }, 3000);
      const interval = setInterval(() => {
        setMessage({
          show: false,
          type: '',
          icon: '',
          title: '',
          content: ''
        })
      }, 4000)

      return () => {
        clearInterval(interval)
        clearInterval(classInterval)
      }
    }, [setMessage])


  return (
    <div ref={msgContainer} className={`animate__animated animate__fadeIn msg-container ${typeMsg()}`}>
      <div className="title">
        {/* <icon></icon> */}
        <h3>{message.title}</h3>
      </div>
      <div>{message.content}</div>
    </div>
  );
}

export default React.memo(Message);