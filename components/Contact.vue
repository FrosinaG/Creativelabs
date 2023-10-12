<template>
  <div class=" mx-8">
    <div class="w-5/12 p-10 m-8 bg-auto inset-y-10 mx-80">
      <div class="w-full m-3 place-content-center">
        <h3 class="font-bold " id="contact">Contact us</h3>
        <p>Do you want to be a part of this network and amazing journey? Contact us, and we will get back to you.</p>
      </div>
      <form action="https://formsubmit.co/frosina.gagovski@gmail.com" method="POST">
        <div class="flex justify-between w-full m-3">
          <div>
            <input class="p-1 " type="text" placeholder="Name" name="Name" />
          </div>
          <div>
            <input class="p-1 " type="text" placeholder="Company" name="company" />
          </div>
        </div>
        <div>
          <input class="w-full p-1 m-3" type="email" placeholder="Email" name="email" />
        </div>
        <div class="">
          <textarea class="w-full m-3" name="message" rows="6" placeholder="Message" required></textarea>
        </div>
        <button class="button-send px-12 text-white" type="submit">Send</button>
      </form>
    </div>
  </div>
</template>
  
<script></script>