import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import { S } from './styles'

export default function Input() {
  const { t } = useTranslation()
  const [value, setValue] = useState('')
  const onChange = e => {
    const v = e.target.value
    setValue(v.replace(/[^a-z]/, ''))
  }
  return (
    <S.Input
      type='text'
      placeholder={t('input_answer')}
      maxLength={3}
      onChange={onChange}
      value={value}
      autoFocus
    />
  )
}
