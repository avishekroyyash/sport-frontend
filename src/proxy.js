import { NextResponse } from 'next/server'
import { auth } from './lib/auth'
import { headers } from 'next/headers'
 
// This function can be marked `async` if using `await` inside
export async function proxy(request) {
 const session = await auth.api.getSession({
    headers : await headers()
 })
if(session){
 NextResponse.next()
}
else{
 return NextResponse.redirect(new URL('/login', request.url))
}
 //console.log(session,'this is proxy users')
 
//   
}
 
 
export const config = {
  matcher: ['/all-facility/:path','/my-bookings','/add-facility','/manage-facilities'],
}