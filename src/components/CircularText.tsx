import * as React from 'react'
import { SVGProps } from 'react'
const CircularText = (props: SVGProps<SVGSVGElement>, className: string) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    viewBox="0 0 1080 1080"
    className={`w-full h-auto ${className}`}
    {...props}
  >
    <path d="M565.1 272.6c-4.6 23.5-8.4 43.4-8.5 44.2-.1 1.5 1.2 2 10.7 3.6 3.6.7 3.8.5 4.9-2.4l1-3.1 2.4 3.4c5.3 7.9 20.8 10.2 29.3 4.3 13-9.1 18.9-37.8 10.4-51.4-5.3-8.6-19.1-13-27.4-8.6-1.7.8-3.2 1.4-3.4 1.2-.2-.2 1-6.6 2.5-14.3 1.6-7.7 2.9-14.5 3-15.2 0-1-2.3-1.6-14-3.9l-2.5-.5-8.4 42.7zm33.2 3.5c3.9 3 5.1 8.7 3.7 16.8-1.4 7.9-3.9 13.9-7 16.6-3 2.7-10.1 2.6-13.8-.2-4.5-3.4-4.8-6-2.3-19.3 2-10.2 2.7-12.4 4.9-14 3.4-2.8 11-2.7 14.5.1zM515.1 256.5c-8 2.3-14 7-17.6 14-2.8 5.5-3 6.6-3 16.9 0 9.8.3 11.7 2.6 16.6 3 6.4 7.4 11.2 13.3 14.3 5.8 3.1 20 3.1 26.6.1 6-2.8 10.8-7.7 13.9-14.4 2.2-4.8 2.6-6.8 2.5-15-.1-11.6-2.6-18.9-8.5-25-7.4-7.6-18.9-10.5-29.8-7.5zm13.9 14c4.1 2.1 7 8.4 7.7 16.3 1.1 13.2-3.4 20.2-12.7 20.2-4.1 0-5.3-.5-7.9-3-3.8-3.8-5.1-8.4-5.1-18.1 0-6.3.4-8.2 2.3-11 3.9-5.8 9.8-7.4 15.7-4.4zM453.5 268.4c-10 3.2-16.1 8.1-18.9 14.8-3.4 8-.6 16.7 6.7 20.9 3.9 2.2 5.3 2.4 17.9 2.5 15 0 16.8.6 16.8 5.5 0 3.7-2.8 6.5-8 7.9-4.9 1.3-7.6.7-11.1-2.7l-2.7-2.5-7.1 2.3c-4.1 1.3-7.1 2.9-7.1 3.6 0 2.7 8.5 9.9 13.3 11.2 9.9 2.8 23.7-.5 31.9-7.8 9.4-8.2 9.2-21.3-.5-28.5-2.5-1.9-4.4-2.1-16-2.3-7.3 0-14.2-.2-15.5-.2-2.8-.1-4.7-3.9-3.8-7.5 1.4-5.6 11.9-7.6 16.1-3l2.4 2.6 7.2-2.4c4-1.3 7.4-2.9 7.6-3.4.6-1.9-4.2-7.7-8.2-9.8-4.9-2.5-15.3-3.1-21-1.2zM637.1 277.3c-1 2.3-6.7 15.4-12.6 29-5.8 13.7-10.5 25-10.3 25.2.1.1 3.6 1.7 7.5 3.3 8.6 3.7 6.6 5.6 15.7-15.6 9.2-21.2 8.5-20.1 12.5-21.3 2.9-.8 4.5-.7 8.1.6 2.5.9 5.2 1.9 6.1 2.1 1.1.4 2.3-1 4.2-5.3 3.6-8.2 3.6-8.5-.3-10.5-4.2-2.1-9.6-2.3-13-.3-3.4 2-4.3 1.8-3-.4 1.9-3.7 1-4.8-6.1-7.9l-7-3.1-1.8 4.2zM684.7 303.1c-6.3 1-12.4 4.7-18.5 11.3-7.7 8.5-9.7 13.4-9.7 23.6 0 10.4 1.9 14.4 9.9 21.8 6.4 5.8 14.3 9.2 21.6 9.2 7 0 8-.6 8-4.9 0-7.1-.7-8.1-5.8-8.1-8.6 0-16.4-5.6-17.8-12.9-.7-3.6.3-10.1 1.6-10.1.5 0 7.9 4.9 16.3 11 8.5 6 15.8 11 16.3 11 1.3 0 8.1-10.9 9.9-15.9 1.9-5.4 1.9-14.1.1-18.5-1.9-4.6-8-11.2-13.2-14.2-5.1-3-12.2-4.2-18.7-3.3zm10.8 14.9c4.1 1.6 7.5 5.9 7.5 9.6 0 3.5-1.8 8.4-3.1 8.4-1.6 0-18.8-12.5-18.5-13.5.4-1.4 7.7-5.5 9.8-5.5.9 0 2.8.4 4.3 1zM368.3 314c-21.9 11-24.1 34.8-4.9 52.8 7.9 7.3 13.9 9.7 23 9 7.5-.6 13.3-3.5 19.3-9.4 6.1-6.2 8.3-11.3 8.3-20 0-6-.5-8.1-3.1-13.3-3.7-7.4-11.7-15.9-17.9-19.1-3-1.5-6.9-2.5-11.5-2.7-6.3-.4-7.6-.2-13.2 2.7zm18.3 15.5c4.6 3.5 9.9 10.9 11.4 15.8 1.6 5.3.5 9.1-3.7 12.8-3.2 2.8-4.2 3.1-8.3 2.7-11.7-1.1-23.8-19.4-18.9-28.5 3.6-6.7 12.6-8 19.5-2.8zM305.1 340.1c-6.6 6.6-2.3 15.6 7.2 15 3.4-.2 7.7-5.6 7.7-9.6 0-8.1-9-11.4-14.9-5.4zM323.1 357.1c-2.8 3.4-5 6.3-4.9 6.4.2.1 10.4 8.7 22.8 19.1 12.4 10.4 23.3 19.5 24.2 20.2 1.3 1.1 2.2.4 6.4-4.8 2.7-3.3 4.9-6.4 4.9-6.8 0-1-46.2-40.2-47.4-40.2-.4 0-3.1 2.8-6 6.1zM737 376.2c-14.6 8.2-26.7 15.2-26.8 15.3-.5.5 6.7 13.3 7.8 14 .4.3 9.6-4.5 20.3-10.5l19.6-11.1 3.5 1.5c4 1.6 7.6 6.8 7.6 10.7 0 3.8-3.8 6.7-23 17.5-9.6 5.4-17.6 9.9-17.8 10-.5.3 6.9 13.3 7.9 14 .5.3 9.3-4.2 19.5-10 10.7-6.1 19.8-10.6 21.3-10.6 5.2 0 10.1 5.8 10.1 11.9 0 3.8-1.7 5.1-23.8 17.5l-17.2 9.7 2.7 4.7c1.5 2.6 3.4 5.9 4.3 7.4l1.6 2.6 19.4-11c26-14.7 31.2-19.9 29.6-30-1.5-9.1-9.4-18.3-16.8-19.4-2.1-.4-3.8-.8-3.8-.9 0-.2.7-1.6 1.5-3.1 2.2-4.3 1.8-9.3-1.1-15.2-2.9-5.8-8.3-10.8-12.6-11.7-3.4-.8-3.5-1.8-.5-3.8l2.2-1.5-3.5-6.6c-1.9-3.6-3.9-6.6-4.5-6.5-.5 0-12.9 6.8-27.5 15.1zM307.1 375.6c-3.3 4.2-3.8 9.8-1.4 16 .6 1.7.5 1.7-1.7.1-1.4-.9-3-1.7-3.6-1.7-1.1 0-8.4 11.2-8.4 12.8 0 .7 49.4 31.6 52.1 32.7 2.1.8 10.3-12.6 8.6-14.1-.7-.6-8.7-5.7-17.9-11.4-15.2-9.3-16.8-10.6-17.4-13.5-.6-3.2 1.6-9.3 4.8-13.7.7-.9 1-1.9.8-2-3.7-2.7-12.2-7.8-12.9-7.8-.5 0-1.9 1.2-3 2.6zM255.5 415.2c-.2.7-1.6 4.4-3 8.2l-2.5 6.9 6.2 8.3c3.5 4.6 6.5 8.4 6.8 8.4.3 0 1.5-2.8 2.7-6.2l2.1-6.2-5.5-10.3c-3-5.7-5.7-10.3-5.9-10.3-.3 0-.7.6-.9 1.2zM288.8 425.2c-5.3 1.4-11.3 7-14.4 13.6-3.2 6.7-4.4 18.7-2.4 24.6 1.3 4 7.2 10.6 9.4 10.6.8 0 2.5-3.2 4.1-7.5l2.8-7.5-2.3-1.8c-4.3-3.5-2.2-12.8 3.5-15.4 3.6-1.6 11 .6 10 3-8.4 19.9-6.2 33.8 6 39.3 9.9 4.5 20.1.4 25.8-10.6 2.1-4.2 2.8-11.8 1.4-16.7-.6-2.4-.4-2.7 2-3 2.4-.3 3.1-1.2 5.5-7.8 1.5-4.1 2.8-7.6 2.8-7.6 0-.1-2.3-.5-5.2-.8-2.8-.4-12.4-3.3-21.3-6.5-17.9-6.5-22.2-7.4-27.7-5.9zm26.4 23.3c5 1.8 6.8 4.4 6.8 10 0 6.9-4.2 11.4-9.4 10.1-4.2-1-6.6-4.1-6.6-8.4 0-4.1 2.7-13.2 3.9-13.2.4 0 2.8.7 5.3 1.5zM781.2 464.5c-18.5 4.1-28.3 18.1-25.2 35.7.7 3.5 2.4 8.5 3.8 11.2 2.6 4.7 9.5 11.6 11.6 11.6.6-.1 2.6-2.2 4.5-4.7l3.4-4.6-2.7-2c-3.1-2.3-6-7.7-7-13-.9-5.1 2.2-12 6.6-14.6 1.8-1.2 3.5-1.7 3.8-1.3.4.4 2.1 8.6 3.9 18.2 1.8 9.6 3.4 18.2 3.7 19.1.4 1.5 1.1 1.5 6.9.3 18-3.8 27.6-14.5 26.2-29.3-1.8-20-18.6-31.3-39.5-26.6zm19.2 17c6.6 3.2 8.7 11.9 4.1 17.3-2.2 2.6-7.1 5-8.1 3.9-.5-.4-4.4-19.5-4.4-21.3 0-1.9 4.4-1.8 8.4.1zM235.6 482.2c-.7 2.2-2.7 15-2.4 15.3.3.3 86.7 14.5 87.9 14.5.7 0 3.4-15.9 2.8-16.4-.2-.2-18.8-3.3-41.4-7-22.5-3.7-42.2-6.9-43.8-7.2-1.7-.4-2.9-.1-3.1.8zM285.5 519c-11.5.4-22.9.8-25.2.9-4.3.1-4.3.1-4.3 4 0 2.1.3 5.9.6 8.4l.7 4.6 22.3-.6c20.6-.6 22.6-.5 24.4 1.2 2.7 2.4 4.3 8 3.6 12.1-1.2 6.2-3.3 6.8-27.5 7.6-11.9.3-22 .7-22.5.7-.7.1-.1 16.2.7 16.6.1.1 10.8-.1 23.7-.5 18.6-.6 24.3-1.1 27.5-2.4 7.3-3.1 10.8-7.7 12-15.8.9-5.8-1.5-14.4-5-18.2l-2.5-2.7 3-.6 3-.6V518l-6.7.2c-3.8.1-16.2.5-27.8.8zM812 527.4v4.5l-20.7.3c-17.7.3-21.3.6-24.1 2.1-6.1 3.4-9 11.1-7.7 20.7l.7 5H773v-3.8c0-6.8 1.2-7.2 20.8-7.2H811v11h13v-10h7.5c7.2 0 7.5-.1 7.5-2.4 0-1.2.3-5.1.6-8.5l.7-6.1H824v-10h-12v4.4zM768 563.5c-1.9.9-4.5 2.6-5.8 3.8-6 5.6-8.8 17-5.8 24.1 2.1 5.1 2 5.6-.8 5.6-2.2 0-2.6.7-4 6.9-2.3 10-2.4 9.6 4.2 9.7 3.1.1 13.2 1.8 22.4 3.8 18.5 4 19.4 4.1 24.9 2.4 8.8-2.6 14.9-12.3 15.7-24.8.6-10.2-1-15.5-6.3-20.7-6.3-6.4-7.8-5.9-9.9 3.3l-1.6 7.6 3 2.8c3.3 3.1 3.7 5.4 1.6 10.5-1.6 3.8-4.2 5.5-8.3 5.5-5.2 0-5.7-1-4.3-8.8 1.8-10.1.9-20.2-2.3-25-4.4-6.8-15.4-10-22.7-6.7zm10.5 16.5c4.3 1.6 5.9 7 4.5 14.7-.7 3.4-1.3 6.3-1.4 6.3 0-.1-2.6-.7-5.6-1.3-4.7-1.1-5.8-1.8-7.3-4.8-2.3-4.3-1.7-10.2 1.4-13.5 2.4-2.6 4.4-2.9 8.4-1.4zM295.1 582.3c-22.7 8.7-28 11.9-30.7 18.3-1.8 4.3-1.8 6.8.2 13.3 1.7 6 6.9 12.3 11.7 14.2 1.7.7 3.3 1.3 3.4 1.4.2.1-.6 1.9-1.7 4-3.6 7-2.1 15.7 3.8 22.5 1.9 2.2 4.8 4.8 6.6 5.7l3.1 1.6-3.2 1.4-3.3 1.3 2.7 7.2c1.4 4 2.7 7.4 2.8 7.5.1.3 29.8-10.6 52.7-19.3l6.7-2.5-2.8-7.7c-2.1-5.4-3.3-7.6-4.4-7.4-.9.1-10 3.4-20.4 7.3-10.3 3.9-19.9 7.1-21.2 7.1-3.8.1-8.2-5.2-8.8-10.4-.5-3.9-.2-4.7 2.1-6.5 1.4-1.2 11.5-5.4 22.4-9.4 10.8-4 19.8-7.3 20-7.4.7-.5-5.4-15.5-6.3-15.5-.5 0-9.9 3.4-20.7 7.4-12.8 4.9-20.5 7.3-22 6.9-5.6-1.4-10-8.9-8.3-14.2.9-2.8 4.5-4.6 26.3-12.6 10.6-4 18.1-7.3 17.9-7.9-.2-.6-1.5-4.1-2.8-7.9-1.3-3.7-2.8-6.7-3.4-6.6-.5 0-10.6 3.7-22.4 8.2zM738 636l-3.4 7.1 23.4 23.4c12.9 12.9 23.7 23.5 24.1 23.5.3 0 2.2-3.6 4.1-7.9l3.6-8-15.1-13.3c-8.2-7.3-15.5-13.6-16.1-14-2.6-1.7 1.2-1.3 19.9 2.3 11 2.1 20.5 3.8 21 3.9 1 0 9-14.9 8.3-15.5-.4-.4-62.7-8.5-64.9-8.5-.9 0-2.9 2.8-4.9 7zM345.7 682.5c-9.2 6.9-17.6 12.5-18.6 12.5-2.7 0-8.2-4.1-10.9-8-1.3-1.9-2.6-3.4-2.9-3.4-2 .6-12.3 9-12.3 10.2 0 2.7 6.6 8.1 11.4 9.3l4.7 1.2-2 2.1-2.1 2.2 4.6 6.2c2.8 3.8 5 5.9 5.7 5.5.9-.5 47.3-35.1 49.5-36.9.5-.3-9.1-13.3-9.8-13.3-.3 0-8 5.6-17.3 12.4zM723 671.3c-13.4 3.8-24.2 17.5-24.4 30.8 0 3.2.2 6 .6 6.4.3.3 3.3.3 6.5 0 5.8-.7 5.9-.8 5.5-3.6-.6-4.1 4.1-13.3 8.1-15.8 1.8-1.1 4.4-2.2 5.8-2.6 2.7-.7 10.9 1 10.9 2.3 0 .4-5.7 7.4-12.5 15.7-6.9 8.2-12.5 15.2-12.5 15.5 0 1.2 11.4 9.2 15.8 11.2 9.5 4.3 21.3 1.8 29-6.2 6.2-6.3 8.7-12.2 8.7-20.5 0-9.3-3.4-16.4-11.3-23.6-9.6-8.8-20.6-12.3-30.2-9.6zm25.2 29.7c2.7 5.1 2.3 9.3-1.2 13.3-3.8 4.3-8.1 5.3-12.7 3-1.9-1-3.5-2.1-3.6-2.5-.3-1.1 13.7-17.8 14.7-17.5.5.2 1.7 1.9 2.8 3.7zM367.6 698.6c-7.7 2.8-17.3 12.2-21.7 21.2-3 6-3.6 14.7-1.5 21 2.2 6.5 8.7 13.9 15.8 17.7 4.6 2.6 6.3 3 12.8 3 9.2-.1 15.3-2.9 22.9-10.6 14.1-14.3 15-32 2.3-44.7-8.3-8.4-20.4-11.4-30.6-7.6zm20.6 17.4c3.8 3.8 4 4.3 3.5 8.6-.9 8.6-11.5 20.5-19.5 22-2.2.4-4.6.1-6.8-.9-9.3-4.5-8.8-15.8 1.2-26.1 5.2-5.3 9.3-7.6 13.8-7.6 3.2 0 4.5.7 7.8 4zM682.1 708c-3.5 2.7-6.5 5-6.7 5.2-.1.2 5.5 7.7 12.7 16.8 8.8 11.2 12.9 17.3 12.9 19 0 3.2-2.8 7.4-7.1 10.6-1.9 1.4-3.3 3-3.1 3.5.3 1.4 8.3 11.9 9 11.9.2 0 1.9-.9 3.7-2 3.8-2.3 6.5-7.4 6.5-12.1v-3.2l2.3 2.1c1.3 1.2 2.7 2.2 3.1 2.2 1 0 11.5-8.3 11.5-9.2.1-.5-32.1-42-38.3-49.5-.1-.1-3 2-6.5 4.7zM647.4 732c-14.8 3-27.7 16.5-25.9 26.9 1.3 7.7 6.8 13.3 14.5 14.8 2.2.4 7.9-.3 15.3-1.8 8.5-1.7 12.3-2 13.4-1.3 5.2 3.3 4 8.8-2.7 12.2-4.7 2.4-7.3 2.2-10.4-.8-1.8-1.8-2.1-1.7-9.2 1.8-4.1 2-7.4 3.9-7.4 4.3 0 1.9 7.7 7.8 11.6 8.9 11.7 3.3 29.1-4.5 34.3-15.3 4.2-8.6 2.2-17.6-5-22.9-3.7-2.8-12.8-3.4-21.2-1.4-9.6 2.2-15.3 2.1-16.7-.3-1.7-3.3-1.1-5.8 2-8.4 4.4-3.8 9.4-5.2 13.1-3.7 1.6.7 3.3 1.9 3.8 2.7.6 1.2 2 .9 8-2.1 6-3.1 7-3.9 6.2-5.4-3.4-6.4-14.3-10.1-23.7-8.2zM448.6 742.3c-.8 1.2-4.2 8.2-7.6 15.4-3.5 7.3-6.6 13.3-6.9 13.3-.4 0-7.1-3.2-15-7-7.8-3.9-14.6-7-15-7-.6 0-6.1 10.3-6.1 11.5 0 .3 6.7 3.9 15 8l15 7.5-4.7 9.5c-2.6 5.2-5.3 9.5-5.9 9.5-.7 0-8.4-3.6-17.3-8l-16.1-8-3 6c-1.6 3.3-3 6.2-3 6.4 0 .6 49.2 24.7 49.6 24.3.6-.6 37.4-74.9 37.4-75.5 0-.4-3.4-2.4-7.5-4.5L450 740l-1.4 2.3zM588.7 753.1c-9.8 1.5-18.3 7.4-22.6 15.6-2.3 4.5-3.2 12.8-2.1 20 2.1 13.1 8.1 22.2 17.6 26.9 4.9 2.4 6.3 2.6 13.7 2.2 12.1-.7 20.9-5.8 26-15.3 3.2-5.9 3.1-21.5-.1-30.2-5.5-14.3-17.7-21.5-32.5-19.2zm11.1 16.2c5.4 5 8.9 17.5 7.2 25.3-2.1 9.1-12.4 12.5-19.4 6.4-6.7-5.9-9.6-23.4-5-29.7 4.1-5.5 12.5-6.5 17.2-2zM502.3 757.5c-5.8 2.5-7.2 9.7-2.8 14 1.8 1.9 3.5 2.5 7 2.5 5.9 0 9.5-3.2 9.5-8.5 0-3.8-3.5-8.5-6.4-8.5-.8 0-2-.2-2.8-.5-.7-.2-2.7.2-4.5 1z" />
  </svg>
)
export default CircularText
