import React from 'react'
import './post.css'

function post() {
  return (
    <div className='max-w-2xl shadow-md	rounded-sm	m-8	bg-white'>
        <div className='flex justify-between items-center p-2.5	border-b-2		'>

            <div className='m-2 flex justify-between items-center	' >
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXpvN9dGJd9fF0RZkekPwtCSCkQCXq7PvLXg&usqp=CAU" alt=""  className='w-8 h-8	object-cover mr-3.5	cursor-pointer	'/>
                <span className='font-medium text-sm cursor-pointer'></span>
            </div>
        </div>
        <div className='bg-neutral-950 m-0 p-0	'>
            <img src="https://editorialtelevisa.brightspotcdn.com/dims4/default/bf3664a/2147483647/strip/true/crop/889x500+56+0/resize/1440x810!/quality/90/?url=https%3A%2F%2Fk2-prod-editorial-televisa.s3.amazonaws.com%2Fbrightspot%2Fwp-content%2Fuploads%2F2018%2F04%2F10-Cuentas-de-Instagram-que-debes-seguir-si-eres-amante-de-los-postres.jpeg" alt="" className='w-full max-w-2xl	max-h-2x1 object-contain	' />
        </div>
        <div className='m-2.5	'>
            <div className='action'>

            <button  className='icon'><svg aria-label="Unlike"  color="#ed4956" fill="#ed4956" height="24" role="img" viewBox="0 0 48 48" width="24"><path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg></button> 
                :
                <button className='icon'><svg className='icon' width='24' height='24' ><path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"></path></svg></button> 
                <button className='icon'><svg width='24' height='24' className='icon' ><path d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z" fill="none" stroke="currentColor" strokeWidth="2"></path></svg></button> 
                <button className='icon'><svg width='24' height='24' className='icon' ><line fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2" x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></polygon></svg></button>
                <button className='icon	'><svg width='24' height='24' className='icon' ><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polygon></svg></button>
            </div>
            <span></span>
            <div>
                <div>
                    <p className='mx-2 whitespace-nowrap overflow-hidden	text-ellipsis		'>
                        <span>userprofile</span>
                    </p>
                </div>
            </div>

            <div></div>
            <div>
            <input type="text" placeholder='Add a comment' name='' id='add-comment'         className="comment" />
       <button  className="button	">Post</button> 
            </div>
        </div>
    </div>
  )
}

export default post