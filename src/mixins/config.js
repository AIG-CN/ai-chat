import { computed } from 'vue'
import locales from './locales.json'
// 录音配置
const defaultConfig = {
  color: '#333',
  tipPosition: 'top',
  tipTextColor: '#f2f2f2',
  tipBackgroundColor: '#4b667d',
  tipShadowColor: 'rgba(0,0,0,.1)',
  interactiveMode: 'press',
  returnMode: 'increment',
  language: 'zh_cn',
  vad_eos: 3000,
}
export default {
  props: {
    color: String,
    tipPosition: String,
    appId: String,
    apiKey: String,
    apiSecret: String,
    // 交互模式
    // 'press': 按下开始录音，放开结束录音
    // 'touch': 点击开始录音，再次点击结束录音
    interactiveMode: String,
    // 结果返回模式
    // 'increment': 增量模式，增量返回识别结果，但对于每次返回都是一个完整的结果，包含对前面识别结果的追加、补充和修正
    // 'complete': 完整模式，完成本次识别后返回最终结果
    returnMode: String,
    language: String,
    accent: String,
    pd: String,
    rlang: String,
    ptt: Number,
    nunum: Number,
    vad_eos: Number,
  },
  setup() {
    function getConfig(key) {
      return defaultConfig[key]
    }

    const pressMode = computed(() => {
      return getConfig('interactiveMode') !== 'touch'
    })

    const touchMode = computed(() => {
      return getConfig('interactiveMode') === 'touch'
    })

    const incrementMode = computed(() => {
      return getConfig('returnMode') === 'increment'
    })

    const completeMode = computed(() => {
      return getConfig('returnMode') === 'complete'
    })

    const locale = computed(() => {
      const locale = locales[getConfig('language')]
      return locale
    })

    return {
      pressMode,
      touchMode,
      incrementMode,
      completeMode,
      locale,
    }
  },
}
