import EmailBadge from './email-badge'

export default function Forms() {
	return (
		<div className="grid grid-cols-12 gap-6">
			<div className="space-y-4 col-span-full lg:col-span-5 lg:col-start-2">
				<h2 className="font-guildhall text-4xl md:5xl lg:text-6xl">
					Vamos pressionar!
				</h2>
				<p className="text-gray-300">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
					facere odio similique assumenda dolorum aut ipsam deleniti voluptatum
					quidem obcaecati! Ipsum accusantium recusandae temporibus molestiae ea
					repudiandae iste dolor incidunt?
				</p>
			</div>

			<div className="col-span-full lg:col-span-5">
				<form action="" className="bg-gray-100 p-6 space-y-5 text-black  ">
					<div className="space-y-5">
						<div className="space-y-2">
							<label htmlFor="" className="block font-semibold">
								Nome*
							</label>
							<input
								type="text"
								placeholder="Digite aqui"
								className="p-2 border-2 border-black w-full rounded-sm placeholder:text-gray-400 placeholder:font-light"
							/>
						</div>
						<div className="space-y-2">
							<label htmlFor="" className="block font-semibold">
								Sobrenome*
							</label>
							<input
								type="text"
								placeholder="Digite aqui"
								className="p-2 border-2 border-black w-full rounded-sm placeholder:text-gray-400"
							/>
						</div>
						<div className="space-y-2">
							<label htmlFor="" className="block font-semibold">
								Seu e-mail*
							</label>
							<input
								type="email"
								placeholder="Digite aqui"
								className="p-2 border-2 border-black w-full rounded-sm placeholder:text-gray-400 !mb-0"
							/>
						</div>
						<div className="space-y-2">
							<label htmlFor="" className="block font-semibold">
								Será enviado para
							</label>
							<div className="p-2 border-2 border-black w-full rounded-sm placeholder:text-gray-400 h-11 flex gap-2 overflow-x-hidden bg-gray-200">
								<EmailBadge email="teste@email.com" />
								<EmailBadge email="teste@email.com" />
								<EmailBadge email="teste@email.com" />
							</div>
						</div>
						<div className="space-y-2">
							<label htmlFor="" className="block font-semibold">
								Assunto*
							</label>
							<input
								type="text"
								placeholder="Digite aqui"
								className="p-2 border-2 border-black w-full rounded-sm placeholder:text-gray-400"
							/>
						</div>
						<div className="space-y-2">
							<label htmlFor="" className="block font-semibold">
								Texto do e-mail*
							</label>
							<textarea
								placeholder="Digite aqui"
								className="p-2 border-2 border-black w-full rounded-sm placeholder:text-gray-400 min-h-28"
								defaultValue="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
									unde, ab repudiandae molestias facere cum, numquam corporis ipsa
									rem explicabo ducimus pariatur accusamus earum cupiditate. Nisi
									provident labore voluptas itaque?"
							/>
						</div>
					</div>
					<div className="space-y-2">
						<button
							type="submit"
							className="bg-black w-full rounded-sm font-bold py-3 text-white"
						>
							ENVIAR
						</button>
						<p className="text-xs text-gray-700 font-light">
							Ao inserir seus dados e enviar este email, você concorda com o uso
							dos mesmos apenas para este fim.
						</p>
					</div>
				</form>
			</div>
		</div>
	)
}
