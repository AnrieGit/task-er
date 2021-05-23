<template>
    <div>
        <Header title="Contacts"/>
        <transition-group tag="ul" class="grid grid-cols-2"
            appear
            @before-enter="beforeEnter"
            @enter="enter"
        >
            <li v-for="(contact, index) in contacts" :key="contact.info" class="border border-gray-200 bg-white p-10" :data-index="index">
                <div class="flex justify-center">
                    <EmailIcon v-if="contact.component === 'email'" class="h-7 w-7 text-tapa-500" />
                    <PhoneIcon v-else-if="contact.component === 'phone'" class="h-7 w-7 text-tapa-500" />
                    <FacebookIcon v-else-if="contact.component === 'facebook'" class="h-7 w-7 text-tapa-500" />
                    <TwitterIcon v-else class="h-7 w-7 text-tapa-500" />
                </div>
                <p class="text-xs text-center mt-2 text-gray-400">
                    {{ contact.info }}
                </p>
            </li>
        </transition-group>
    </div>
</template>

<script>
    import gsap from 'gsap'
    import Header from '../components/Header'
    import MinusIcon from '../components/icons/MinusIcon'
    import EmailIcon from '../components/icons/EmailIcon'
    import PhoneIcon from '../components/icons/PhoneIcon'
    import FacebookIcon from '../components/icons/FacebookIcon'
    import TwitterIcon from '../components/icons/TwitterIcon'

    export default {
        name: 'Contact',
        data() {
            return {
                contacts: [
                    {component: 'email', info: 'sample@email.com'},
                    {component: 'phone', info: '+63 0808 990 878'},
                    {component: 'facebook', info: '@facebookUser'},
                    {component: 'twitter', info: '@twitterUser'},
                ]
            }
        },
        components: {
            Header,
            MinusIcon,
            EmailIcon,
            PhoneIcon,
            FacebookIcon,
            TwitterIcon,
        },
        methods: {
            beforeEnter(el) {
                el.style.opacity = 0
                el.style.transform = 'translateY(100px)'
            },
            enter(el, done) {
                gsap.to(el, {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    delay: el.dataset.index * 0.2,
                    onComplete: done,
                })
            },
        }
    }
</script>