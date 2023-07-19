'use client'

import { Button, Input, Label } from '@/components/ui'
import { toast, ToastContainer } from 'react-toastify'
import { toastOptions } from '@/types/toast'
import 'react-toastify/dist/ReactToastify.css'
import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useRouter } from 'next/navigation'

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
})

type FormData = z.infer<typeof schema>

export default function Login() {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const onSubmit: SubmitHandler<FormData> = (data) => {
    if (data.email === 'admin@admin.com' && data.password === '123456') {
      toast('Login realizado com sucesso', { ...toastOptions, type: 'success' })
      console.log('data', data)
      router.push('/')
    } else {
      toast('Login ou senha inválidos', toastOptions)
    }
  }

  return (
    <>
      <div className="w-full h-screen px-5 bg-gray-300">
        <div className="flex items-center justify-center w-full h-full ">
          <form className="w-full max-w-xl" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3 space-y-1">
              <Label htmlFor="email" className="font-semibold">
                E-mail:
              </Label>
              <Input
                id="email"
                type="email"
                {...register('email')}
                placeholder="Digite o seu e-mail"
                className={
                  errors.email
                    ? 'border-red-500 focus-visible:ring-red-500'
                    : ''
                }
              />
              {errors.email && (
                <p className="text-sm text-red-500">E-mail é obrigatório</p>
              )}
            </div>
            <div className="mb-5 space-y-1">
              <Label htmlFor="password" className="font-semibold">
                Senha:
              </Label>
              <Input
                id="password"
                type="password"
                {...register('password')}
                placeholder="Digite sua senha"
                className={
                  errors.password
                    ? 'border-red-500 focus-visible:ring-red-500'
                    : ''
                }
              />
              {errors.password && (
                <p className="text-sm text-red-500">
                  Senha deve ter no mínimo 6 caracteres
                </p>
              )}
            </div>
            <Button className="w-full" type="submit">
              Entrar
            </Button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  )
}
