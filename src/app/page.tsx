'use client'

import { CounterReduxComponent } from '@/components/counter_redux_component'
import { useGetLightingSummary } from '@/queries/query'

export default function Home() {
  const { data, isError, isLoading } = useGetLightingSummary()
  console.log('data', data)
  return (
    <div>
      Primeira página <CounterReduxComponent />
    </div>
  )
}
