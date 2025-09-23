import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Factory } from "lucide-react"
import Link from "next/link"

export default function ProdutosPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img src="/images/logo-pontaco.jpeg" alt="Logo Pontaço Vazadores" className="h-12 w-12 object-contain" />
              <div>
                <h1 className="text-2xl font-bold text-primary">Pontaço Vazadores</h1>
                <p className="text-sm text-muted-foreground">Metalúrgica Especializada</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6">
              <Link href="/" className="text-foreground hover:text-primary transition-colors">
                Início
              </Link>
              <a href="/produtos" className="text-primary font-medium">
                Produtos
              </a>
              <Link href="/#sobre" className="text-foreground hover:text-primary transition-colors">
                Sobre Nós
              </Link>
              <Link href="/#contato" className="text-foreground hover:text-primary transition-colors">
                Contato
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Back Button */}
      <div className="container mx-auto px-4 py-6">
        <Link href="/" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar para o início
        </Link>
      </div>


      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Categoria 1: Pinos e Vazadores */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Pinos e Vazadores</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Fabricamos vazadores de alta qualidade para facas, disponíveis em alturas de 19 mm e 32 mm, além de facas gráficas com altura de 23,8 mm. Produzimos também vazadores de saída fundo, com opções em 10 mm, 12 mm, 15 mm, 19 mm, 20 mm e 32 mm. Todas as peças são confeccionadas em aço, passam por processo de têmpera e recebem tratamento especial para garantir maior resistência, precisão e durabilidade no uso.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              <Card className="overflow-hidden">
                <div className="aspect-square bg-muted relative">
                  <img
                    src="/images/arrombador.jpeg"
                    alt="Arrombadores industriais"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">Arrombadores</h3>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="aspect-square bg-muted relative">
                  <img
                    src="/images/picote.jpeg"
                    alt="Picotes industriais"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">Vazadores saida fundo</h3>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="aspect-square bg-muted relative">
                  <img
                    src="/images/vazador-conico.jpeg"
                    alt="Vazadores cônicos com abertura lateral"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">Vazadores saida lateral</h3>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="aspect-square bg-muted relative">
                  <img
                    src="/images/vazadores-conicos.jpeg"
                    alt="Conjunto de vazadores cônicos"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">Vazadores saida pelo fundo</h3>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="aspect-square bg-muted relative">
                  <img
                    src="/images/pinos-finos.jpeg"
                    alt="Pinos finos de precisão"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">Pinos</h3>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="aspect-square bg-muted relative">
                  <img
                    src="/images/vazadores-ovais.jpeg"
                    alt="Vazadores com aberturas ovais"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">Vazadores saida lateral</h3>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="aspect-square bg-muted relative">
                  <img
                    src="/images/vazadores-multiplos.jpeg"
                    alt="Vazadores com múltiplas aberturas"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">Vazadores saida lateral dupla</h3>
                </CardContent>
              </Card>

              {/* New Card for Roscados */}
            </div>
          </div>

          {/* Categoria 2: Pino Mola */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Pino Mola</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Pino mola são peças indispensáveis para quem busca eficiência e confiabilidade em processos de estamparia e ferramentaria. Desenvolvidos para uso em matrizes convencionais e também em matrizes de frequência, eles oferecem alto desempenho mesmo em aplicações que exigem resistência a impactos repetitivos e temperaturas elevadas. Nossos modelos específicos para matrizes de frequência suportam até 300 °C, garantindo segurança e estabilidade durante toda a operação. Produzidos em materiais de alta qualidade e com rigoroso padrão de fabricação, os pinos mola proporcionam durabilidade, precisão e menor necessidade de manutenção, tornando-se a escolha ideal para empresas que valorizam produtividade e resultados consistentes em seus processos industriais.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="overflow-hidden">
                <div className="aspect-square bg-muted relative">
                  <img
                    src="/images/pino-mola-dourado.jpeg"
                    alt="Pinos mola dourados de alta qualidade"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">Pino Mola Latão</h3>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="aspect-square bg-muted relative">
                  <img
                    src="/images/pino-mola-collection.jpeg"
                    alt="Coleção variada de pinos mola"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">Linha Completa</h3>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="aspect-square bg-muted relative">
                  <img
                    src="/images/pino-mola-industrial.jpeg"
                    alt="Pinos mola industriais com hastes claras"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">Modelos recorrentes </h3>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="aspect-square bg-muted relative">
                  <img
                    src="/images/pino-mola-standard.jpeg"
                    alt="Pinos mola padrão com acabamento dourado"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">Série Padrão</h3>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="aspect-square bg-muted relative">
                  <img
                    src="/images/pino-mola-specialty.jpeg"
                    alt="Pinos mola especiais com hastes claras"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">Linha Especial Frequência</h3>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="aspect-square bg-muted relative">
                  <img
                    src="/images/pino-mola-1.jpeg"
                    alt="Pinos mola originais"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">Série Padrão</h3>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Categoria 3: Vazadores Variados e Desenhados */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Vazadores Variados e Desenhados</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Fabricamos vazadores e vazadores desenhados de alta qualidade, desenvolvidos para atender tanto aplicações padrão quanto projetos personalizados. Já os vazadores desenhados são produzidos sob medida, de acordo com as especificações e necessidades de cada cliente, garantindo encaixe perfeito e funcionalidade ideal.
Todas as peças são confeccionadas em aço, passam por têmpera e recebem tratamento especial, assegurando resistência, durabilidade e precisão mesmo em trabalhos mais exigentes. Nossa linha é projetada para oferecer desempenho confiável, eficiência e longa vida útil em aplicações industriais e gráficas.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="overflow-hidden">
                <div className="aspect-square bg-muted relative">
                  <img
                    src="/images/pino-mola-precision.jpeg"
                    alt="Pinos mola de precisão originais"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">Pino Guia</h3>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="aspect-square bg-muted relative">
                  <img
                    src="/images/vazadores-especializados.jpeg"
                    alt="Vazadores especializados com pontas variadas"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">Vazadores Manuais</h3>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="aspect-square bg-muted relative">
                  <img
                    src="/images/vazadores-customizados.jpeg"
                    alt="Vazadores com designs customizados"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">Vazadores Desenhados</h3>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="aspect-square bg-muted relative">
                  <img
                    src="/images/vazadores-geometricos.jpeg"
                    alt="Vazadores com geometrias complexas"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">Vazadores Desenhados</h3>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="aspect-square bg-muted relative">
                  <img
                    src="/images/vazadores-decorativos.jpeg"
                    alt="Vazadores para formas decorativas"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">Desenhados Grazianos</h3>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="aspect-square bg-muted relative">
                  <img
                    src="/images/vazador-floral.jpeg"
                    alt="Vazador com formato floral"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">Formato Floral</h3>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center">
            <Card className="max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle className="text-2xl">Precisa de um Orçamento?</CardTitle>
                <CardDescription>
                  Entre em contato conosco para solicitar um orçamento personalizado para seus produtos
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/#contato">
                    <Button className="w-full sm:w-auto">Solicitar Orçamento</Button>
                  </Link>
                  <Link href="/">
                    <Button variant="outline" className="w-full sm:w-auto bg-transparent">
                      Voltar ao Início
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img src="/images/logo-pontaco.jpeg" alt="Logo Pontaço Vazadores" className="h-6 w-6 object-contain" />
                <h3 className="text-xl font-bold">Pontaço Vazadores</h3>
              </div>
              <p className="text-primary-foreground/80">
                30 anos de tradição em metalurgia, oferecendo produtos de alta qualidade e precisão para a indústria.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Produtos</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>Pinos e Vazadores</li>
                <li>Pino Mola</li>
                <li>Vazadores Variados e Desenhados</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>pontaco.vazadores@gmail.com</li>
                <li>(16) 99127-9293</li>
                <li>Franca - SP, Brasil</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
            <p className="text-primary-foreground/80">© 2024 Pontaço Vazadores. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
