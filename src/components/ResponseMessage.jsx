import React from 'react'

const ResponseMessage = ({ type, content }) => {
    return (
        <div className='fixed top-4 right-4'>
            {type === 'success' && <p className="px-3 py-2 border-2 border-green-700 text-green-700 bg-green-100 w-auto min-w-60 rounded-sm">{content}</p>}
            {type === 'error' && <p className="px-3 py-2 border-2 border-red-700 text-red-700 bg-red-100 w-auto min-w-60 rounded-sm">{content}</p>}
        </div>
    )
}

export default ResponseMessage