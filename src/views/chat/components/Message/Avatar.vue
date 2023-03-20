<script lang="ts" setup>
import { computed } from 'vue'
import { NAvatar } from 'naive-ui'
import { useUserStore } from '@/store'
import { isString } from '@/utils/is'
import defaultAvatar from '@/assets/avatar1.jpg'
import chatDefaultAvatar from '@/assets/chatavatar.png'

interface Props {
  image?: boolean
}
defineProps<Props>()

const userStore = useUserStore()

const avatar = computed(() => userStore.userInfo.avatar)
</script>

<template>
  <template v-if="image">
    <NAvatar v-if="isString(avatar) && avatar.length > 0 && false" :src="avatar" :fallback-src="defaultAvatar" />
    <NAvatar v-else :src="defaultAvatar" />
  </template>
  <NAvatar v-else :src="chatDefaultAvatar" />
</template>
