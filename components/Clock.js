const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');

const Clock = () => {
  return (
    <div class="clock">
      <div class="hand hours"></div>
      <div class="hand minutes"></div>
      <div class="hand seconds"></div>
      <div class="point"></div>
      <div class="marker">
        <span class="marker__1"></span>
        <span class="marker__2"></span>
        <span class="marker__3"></span>
        <span class="marker__4"></span>
      </div>
    </div>

)}

export default Clock;

