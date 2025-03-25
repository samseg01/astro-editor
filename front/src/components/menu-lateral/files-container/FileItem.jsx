import { useState } from 'react'
import '../MenuLateral.css'

function FileItem({ fileName, isClick, funcClick, type }) {
    function IconFromType(isClick, type) {
        if(type == 'file') {
            return '*'
        }else if(type == 'paste') {
            if(isClick) {
                return '\\/'
            }
            return '>'
        }
    }

    return(
        <div className={isClick ? 'file-item on-click' : 'file-item off-click'} 
            onClick={funcClick} 
        >
            <div className="info-item-file">
                <div className="info icon">{IconFromType(isClick, type)}</div>
                <div className="info name-file">{fileName}</div>
            </div>
        </div>
    )
}

export default FileItem