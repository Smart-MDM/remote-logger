const socket = io("http://localhost:3002",{
  transports: ['websocket'],
  path: '/websocket',
})

socket.on('connect', () => {
  console.log('[socket-connected]: ', socket.id);
})

socket.on('disconnect', () => {
  console.log('[socket-disconnected]: ', socket.id);
})