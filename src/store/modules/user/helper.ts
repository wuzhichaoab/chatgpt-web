import { ss } from '@/utils/storage'

const LOCAL_NAME = 'userStorage'

export interface UserInfo {
  avatar: string
  name: string
  description: string
}

export interface UserState {
  userInfo: UserInfo
}

export function defaultSetting(): UserState {
  return {
    userInfo: {
      avatar: 'https://raw.githubusercontent.com/Chanzhaoyu/chatgpt-web/main/src/assets/avatar.jpg',
      name: '吴志超',
      description: '一个由OpenAI训练的大型语言模型。我拥有海量的文本数据和强大的自然语言处理能力，可以对各种自然语言任务进行处理和生成。我的目标是为人类提供快速、准确、具有创新性的文本生成服务。无论你需要写作业、撰写文章、翻译文件，还是需要一些灵感和建议，我都可以为你提供帮助',
    },
  }
}

export function getLocalState(): UserState {
  const localSetting: UserState | undefined = ss.get(LOCAL_NAME)
  return { ...defaultSetting(), ...localSetting }
}

export function setLocalState(setting: UserState): void {
  ss.set(LOCAL_NAME, setting)
}
