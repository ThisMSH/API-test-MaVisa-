<template>
    <div class="background"></div>
    <section class="hero">
        <div></div>
        <div class="visa">
            <h1 class="mb-3">MaVisa</h1>
            <p class="text-light p-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, obcaecati nesciunt. Sit qui vel fugiat itaque aliquam vitae beatae eius, doloremque repudiandae aspernatur nam quisquam voluptate modi molestias harum dolor!</p>
            <button class="btn" @click="redirect()">Book Now</button>
        </div>
    </section>
</template>

<style scoped>
.background {
    position: absolute;
    background-image: url("../assets/mavisa.jpg");
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
}
.hero {
    height: 100vh;
    background: linear-gradient(to right, transparent, rgba(0, 0, 0));
    display: grid;
    grid-template-columns: repeat(2, 50%);
}

.hero h1 {
    font-size: 4rem;
    font-weight: 600;
    color: #fff;
}

.hero button {
    background-color: black;
    color: white;
    align-self: center;
    padding: 10px 30px;
    border-radius: 30px;
    border: 1px solid #fff;
    transition: 0.3s ease-in-out;
}

.hero button:hover {
    transform: scale(1.2);
}

.visa {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
}
</style>

<script>
import router from '@/router'
export default {
    methods: {
        redirect() {
            let token = localStorage.getItem('token')
            if (token != undefined) {
                alert('You have already a reservation!')
            } else {
                router.push('/form')
            }
        }
    }
}
</script>