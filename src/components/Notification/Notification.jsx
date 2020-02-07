import React from 'react';

const Notification = () => {

    const time = setInterval(() => {
        let seconds = time + 1;

        if (time === 1) {

            const getElem = document.querySelector('.notification');
            // getElem.parentNode.removeChild(getElem);
            // getElem.classList.remove('notification')

            getElem.classList.toggle('welcome');
            getElem.innerText = 'Welcome'

            clearInterval(time)
            setTimeout(getElem.style.opacity = '0', 5000);
        }

    }, 1500)

    return (
        <div className="notification welcome">
            Hello
      </div>

    )
}

export default Notification;
