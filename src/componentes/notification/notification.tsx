import React from 'react'
import type { NotificationProps } from '../../types/types'
import './notification.css'

export const Notification: React.FC<NotificationProps> = ({children})=>{
    return(
        <div className="aviso-fondo">
            <div className="aviso">
                <h3 className="aviso-titulo">{children}</h3>
            </div>
        </div>
    )
}