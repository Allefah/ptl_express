<template>
  <svg
    class="PTLLogo"
    :width="width"
    :height="height"
    viewBox="0 0 139 107"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M52 31L119 31" stroke="#172242" stroke-width="6" />
    <path d="M50 75L120 75" stroke="#172242" stroke-width="6" />
    <path fill-rule="evenodd" clip-rule="evenodd" d="M94.8538 24.3673C89.5667 17.1501 82.5118 13 75 13L83.5 11.5C93.3852 11.5 93.5802 12.4758 99.694 20.8215C105.809 29.1692 109.5 40.5558 109.5 53C109.5 65.4442 105.809 76.8308 99.694 85.1785C93.5802 93.5242 89.3852 94.5 79.5 94.5L75 93C82.5118 93 89.5667 88.8499 94.8538 81.6327C100.139 74.4175 103.5 64.304 103.5 53C103.5 41.696 100.139 31.5825 94.8538 24.3673Z" :fill="color" />
    <path fill-rule="evenodd" clip-rule="evenodd" d="M65.1946 48.3163C65.9811 38.9147 69.1024 30.5701 73.6463 24.3673C78.9333 17.1501 85.9883 13 93.5001 13L88.0001 11.5C78.1149 11.5 74.9198 12.4758 68.8061 20.8215C63.4345 28.1542 59.9335 37.8316 59.1615 48.5109L65.1946 48.3163ZM65.3207 59H59.2895C60.2694 69.0801 63.689 78.1932 68.8061 85.1785C74.9198 93.5242 79.6149 95 89.5001 95L93.5001 93C85.9883 93 78.9333 88.8499 73.6463 81.6327C69.3156 75.721 66.2772 67.8637 65.3207 59Z" :fill="color" />
    <path fill-rule="evenodd" clip-rule="evenodd" d="M96.5518 56L100 54L93.3334 50H126V56H96.5518Z" :fill="color" />
    <path fill-rule="evenodd" clip-rule="evenodd" d="M84.5 80C99.1355 80 111 68.1355 111 53.5C111 38.8645 99.1355 27 84.5 27C71.562 27 60.7896 36.2718 58.4646 48.5334L75 48V39L100 54L75 68.5V59H58.5715C61.1036 70.9961 71.7504 80 84.5 80Z" :fill="color" />
    <path fill-rule="evenodd" clip-rule="evenodd" d="M123 53C123 73.3693 106.276 90 85.5 90C66.8064 90 51.3936 76.5365 48.4914 59H42.4201C45.3731 79.908 63.5355 96 85.5 96C109.524 96 129 76.7482 129 53C129 29.2518 109.524 10 85.5 10C62.8198 10 44.1936 27.1578 42.1803 49.0587L48.2322 48.8635C50.3144 30.4264 66.1495 16 85.5 16C106.276 16 123 32.6307 123 53Z" :fill="color" />
    <path fill-rule="evenodd" clip-rule="evenodd" d="M133 53.5C133 79.681 111.562 101 85 101C60.3246 101 40.0716 82.6023 37.3187 59H31.2819C34.0612 85.9633 57.051 107 85 107C114.823 107 139 83.0472 139 53.5C139 23.9528 114.823 0 85 0C56.5641 0 33.2618 21.7759 31.1552 49.4144L37.1925 49.2196C39.3779 25.0345 59.9011 6 85 6C111.562 6 133 27.319 133 53.5Z" :fill="color" />
    <path d="M0 48V50.5L68.5 48V38L0 48Z" :fill="color" />
  </svg>
</template>

<script>
export default {
  props: {
    height: {
      type: String,
      required: true
    },
    width: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: true
    }
  }
}
</script>

<style>
.PTLLogo {
  margin: auto;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

#exterieur {
  transform-origin: center;
  animation: tournei 1s ease infinite;
}

@keyframes tournei {
  from {  transform: rotateZ(2deg) }
  50% { transform: rotateZ(-2deg) }
  to { transform: rotateZ(2deg) }
}
</style>
