"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MessageCircle, Phone, MapPin, Factory, Award, Clock, Menu, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleWhatsAppSubmit = () => {
    const nome = (document.querySelector('input[placeholder="Seu nome completo"]') as HTMLInputElement)?.value || ""
    const empresa = (document.querySelector('input[placeholder="Nome da empresa"]') as HTMLInputElement)?.value || ""
    const whatsapp = (document.querySelector('input[placeholder="(16) 99999-9999"]') as HTMLInputElement)?.value || ""
    const produto =
      (document.querySelector('input[placeholder="Ex: Vazadores para facas de sapato"]') as HTMLInputElement)?.value ||
      ""
    const mensagem = (document.querySelector("textarea") as HTMLTextAreaElement)?.value || ""

    const textoCompleto = `*Solicitação de Orçamento - Pontaço Vazadores*\n\n*Nome:* ${nome}\n*Empresa:* ${empresa}\n*WhatsApp:* ${whatsapp}\n*Produto de Interesse:* ${produto}\n*Mensagem:* ${mensagem}`

    const numeroWhatsApp = "5516991279293"
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(textoCompleto)}`
    window.open(url, "_blank")
  }

  const handleFloatingWhatsApp = () => {
    const numeroWhatsApp = "5516991279293"
    const mensagem = "Olá! Gostaria de solicitar informações sobre os produtos da Pontaço Vazadores."
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`
    window.open(url, "_blank")
  }

  return (
    <div className="min-h-screen bg-background">
      <section id="inicio" className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/aco-background.jpg"
            alt="Fundo industrial com peças de aço"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/85"></div>
        </div>

        <div className="absolute top-20 right-10 w-32 h-32 border-2 border-primary/20 rotate-45 hidden lg:block"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 border-2 border-accent/20 rotate-12 hidden lg:block"></div>

        <div className="container mx-auto px-4 relative z-10">
          <header className="py-8">
            <div className="flex flex-col items-center space-y-8">
              {/* Logo centralizada e bem grande */}
              <div className="flex justify-center">
                <img
                  src="/images/logo-pontaco-nova.png"
                  alt="Logo Metalúrgica Pontaço"
                  className="h-32 md:h-40 lg:h-48 w-auto object-contain"
                />
              </div>

              {/* Menu desktop embaixo da logo */}
              <nav className="hidden md:flex space-x-8">
                <a href="#inicio" className="text-foreground hover:text-primary transition-colors font-medium text-lg">
                  Início
                </a>
                <Link
                  href="/produtos"
                  className="text-foreground hover:text-primary transition-colors font-medium text-lg"
                >
                  Produtos
                </Link>
                <a href="#sobre" className="text-foreground hover:text-primary transition-colors font-medium text-lg">
                  Sobre Nós
                </a>
                <a href="#contato" className="text-foreground hover:text-primary transition-colors font-medium text-lg">
                  Contato
                </a>
              </nav>

              {/* Botão menu mobile */}
              <button
                className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>

              {/* Menu mobile */}
              {isMenuOpen && (
                <nav className="md:hidden mt-6 pb-4 border-t pt-6">
                  <div className="flex flex-col space-y-4 items-center">
                    <a
                      href="#inicio"
                      className="text-foreground hover:text-primary transition-colors font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Início
                    </a>
                    <Link
                      href="/produtos"
                      className="text-foreground hover:text-primary transition-colors font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Produtos
                    </Link>
                    <a
                      href="#sobre"
                      className="text-foreground hover:text-primary transition-colors font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Sobre Nós
                    </a>
                    <a
                      href="#contato"
                      className="text-foreground hover:text-primary transition-colors font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Contato
                    </a>
                  </div>
                </nav>
              )}
            </div>
          </header>

          <div className="text-center py-14">
            <h1 className="text-4xl md:text-7xl font-bold text-balance mb-8 leading-tight text-foreground">
              A 30 anos no mercado
            </h1>

            <p className="text-lg md:text-xl text-foreground text-balance mb-4 max-w-3xl mx-auto font-medium">
              Fabricamos com precisão vazadores, pino mola para matrizes de frequência
            </p>
            <br></br>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-4 h-auto font-semibold shadow-lg btn-animate"
                onClick={() => {
                  const url = `https://wa.me/5516991279293?text=${encodeURIComponent("Olá! Gostaria de solicitar um orçamento para produtos da Pontaço Vazadores.")}`
                  window.open(url, "_blank")
                }}
              >
                <MessageCircle className="mr-3 h-5 w-5" />
                Solicitar Orçamento
              </Button>
              <Link href="/produtos">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary hover:bg-primary/10 text-lg px-8 py-4 h-auto font-semibold bg-transparent btn-outline-animate"
                >
                  <Factory className="mr-3 h-5 w-5" />
                  Nossos Produtos
                </Button>
              </Link>
            </div>

            <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2 text-primary">500+</div>
                <div className="text-muted-foreground text-sm">Clientes Atendidos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2 text-primary">100%</div>
                <div className="text-muted-foreground text-sm">Qualidade Garantida</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2 text-primary">30+</div>
                <div className="text-muted-foreground text-sm">Anos no Mercado</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossos Produtos</h2>
            <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
              Fabricamos com precisão e qualidade superior para atender às necessidades da indústria
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Vazadores para Facas de Sapato */}
            <Card className="overflow-hidden">
              <div className="aspect-square bg-muted relative">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/WhatsApp%20Image%202024-06-18%20at%2010.40.47%281%29%281%29%281%29-FSIaD1iNHGbyiGjSZaALAO0QjJow1h.jpeg"
                  alt="Vazadores para facas de sapato com diferentes formatos"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Vazadores para Facas de Sapato</CardTitle>
                <CardDescription>
                  Vazadores de alta precisão com diversos formatos para atender diferentes necessidades da indústria
                  calçadista.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                  <li>• Formatos variados: oval, coração, estrela, triângulo, gota</li>
                  <li>• Material de alta resistência</li>
                  <li>• Acabamento profissional</li>
                  <li>• Durabilidade garantida</li>
                </ul>
                <Button variant="outline" className="w-full bg-transparent btn-outline-animate">
                  Solicitar Orçamento
                </Button>
              </CardContent>
            </Card>

            {/* Pinos Mola para Matrizes */}
            <Card className="overflow-hidden">
              <div className="aspect-square bg-muted relative">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/WhatsApp%20Image%202024-06-18%20at%2010.40.47%20%284%29%281%29%281%29%281%29-vMClFVcKyI17Wv67y72EZZN6uzzHYn.jpeg"
                  alt="Pinos mola para matrizes de diferentes tamanhos"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Pinos Mola para Matrizes</CardTitle>
                <CardDescription>
                  Pinos mola fabricados com materiais de primeira qualidade para garantir performance e durabilidade em
                  matrizes industriais.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                  <li>• Diversos diâmetros disponíveis</li>
                  <li>• Resistência à fadiga</li>
                  <li>• Tratamento térmico especializado</li>
                  <li>• Conformidade com normas técnicas</li>
                </ul>
                <Button variant="outline" className="w-full bg-transparent btn-outline-animate">
                  Solicitar Orçamento
                </Button>
              </CardContent>
            </Card>

            {/* Matrizes de Frequência */}
            <Card className="overflow-hidden">
              <div className="aspect-square bg-muted relative">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/WhatsApp%20Image%202024-06-18%20at%2010.40.47%20%281%29%281%29%281%29%281%29-OYEhWUG9hel0liC545HbNgPfS6Q2zV.jpeg"
                  alt="Matrizes de frequência com diferentes especificações"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Matrizes de Frequência</CardTitle>
                <CardDescription>
                  Matrizes desenvolvidas com tecnologia avançada para aplicações que exigem precisão dimensional e
                  repetibilidade.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                  <li>• Precisão dimensional superior</li>
                  <li>• Acabamento superficial otimizado</li>
                  <li>• Projeto customizado</li>
                  <li>• Suporte técnico especializado</li>
                </ul>
                <Button variant="outline" className="w-full bg-transparent btn-outline-animate">
                  Solicitar Orçamento
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-8">Galeria de Pinos Mola</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="aspect-square bg-muted rounded-lg overflow-hidden">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/WhatsApp%20Image%202024-06-18%20at%2010.40.46%20%281%29%281%29%281%29%281%29-pSeecOlPAKl7x8rgh9ZeEnW8sZG3Mu.jpeg"
                  alt="Pinos mola com hastes douradas e bases cilíndricas"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="aspect-square bg-muted rounded-lg overflow-hidden">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/WhatsApp%20Image%202024-06-18%20at%2010.40.46%20%282%29%281%29%281%29%281%29-LrBOr5DjNFGppSHZucX5rnboSDb7SU.jpeg"
                  alt="Pinos mola de diferentes tamanhos e acabamentos"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="aspect-square bg-muted rounded-lg overflow-hidden">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/WhatsApp%20Image%202024-06-18%20at%2010.40.46%281%29%281%29%281%29-cX3HHAqFQviDxGuEpGrRlsKZUPnu2U.jpeg"
                  alt="Pinos mola com hastes claras e bases escuras"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Sobre a Pontaço Vazadores</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Com 30 anos de tradição no mercado metalúrgico, a Pontaço Vazadores consolidou-se como referência na
                fabricação de componentes de precisão para a indústria.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Nossa expertise abrange a produção de vazadores para facas de sapato, pinos mola para matrizes e
                matrizes de frequência, sempre priorizando a qualidade, precisão e durabilidade dos produtos.
              </p>
            </div>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Award className="mr-2 h-5 w-5 text-primary" />
                    Qualidade Certificada
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Todos os nossos produtos passam por rigoroso controle de qualidade, garantindo conformidade com as
                    normas técnicas mais exigentes do mercado.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Factory className="mr-2 h-5 w-5 text-primary" />
                    Tecnologia Avançada
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Investimos constantemente em equipamentos e processos modernos para oferecer produtos com a máxima
                    precisão e eficiência.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Entre em Contato</h2>
            <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
              Estamos prontos para atender suas necessidades. Entre em contato conosco para orçamentos e informações.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Contact Info */}
            <Card>
              <CardHeader>
                <CardTitle>Informações de Contato</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MessageCircle className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">WhatsApp</p>
                    <p className="text-muted-foreground">(16) 99127-9293</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Telefone</p>
                    <p className="text-muted-foreground">(16) 99127-9293</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Endereço</p>
                    <p className="text-muted-foreground">Rua Jupira Cunha Marcondes 2245</p>
                    <p className="text-muted-foreground">Franca - SP, Brasil</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Horário de Atendimento</p>
                    <p className="text-muted-foreground">Segunda a Sexta: 7h às 17h</p>
                    <p className="text-muted-foreground">Final de semana: Fechado</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Map */}
            <Card>
              <CardHeader>
                <CardTitle>Nossa Localização</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="aspect-video w-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.8!2d-47.4!3d-20.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDMwJzAwLjAiUyA0N8KwMjQnMDAuMCJX!5e0!3m2!1spt-BR!2sbr!4v1"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localização da Pontaço Vazadores"
                  ></iframe>
                </div>
                <div className="p-4">
                  <p className="text-sm text-muted-foreground">Rua Jupira Cunha Marcondes 2245, Franca - SP</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Solicite um Orçamento</CardTitle>
                <CardDescription>Preencha o formulário abaixo e enviaremos via WhatsApp.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Nome</label>
                    <Input placeholder="Seu nome completo" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Empresa</label>
                    <Input placeholder="Nome da empresa" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">WhatsApp</label>
                    <Input placeholder="(16) 99999-9999" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Produto de Interesse</label>
                    <Input placeholder="Ex: Vazadores para facas de sapato" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Mensagem</label>
                  <Textarea
                    placeholder="Descreva suas necessidades, quantidades, especificações técnicas..."
                    rows={4}
                  />
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 btn-animate" onClick={handleWhatsAppSubmit}>
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Enviar via WhatsApp
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img src="/images/logo-pontaco.jpeg" alt="Logo Pontaço Vazadores" className="h-6 w-6 object-contain" />
                <h3 className="text-xl font-bold">Pontaço Vazadores</h3>
              </div>
              <p className="text-gray-300">
                30 anos de tradição em metalurgia, oferecendo produtos de alta qualidade e precisão para a indústria.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-primary">Produtos</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Vazadores para Facas de Sapato</li>
                <li>Pinos Mola para Matrizes</li>
                <li>Matrizes de Frequência</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-primary">Contato</h4>
              <ul className="space-y-2 text-gray-300">
                <li>pontaco.vazadores@gmail.com</li>
                <li>(16) 99127-9293</li>
                <li>Franca - SP, Brasil</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">© 2025 Pontaço Vazadores. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      <button
        onClick={handleFloatingWhatsApp}
        className="whatsapp-float fixed bottom-4 right-4 bg-green-500 text-white rounded-full p-3 shadow-lg hover:bg-green-600 transition-all duration-300"
        title="Fale conosco no WhatsApp"
        aria-label="Abrir WhatsApp"
      >
        <MessageCircle size={24} />
      </button>
    </div>
  )
}
