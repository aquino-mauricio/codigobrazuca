programa {
  funcao inicio()
  {
    inteiro ano

    escreva("Digite um ano: ")
    leia(ano)

    se (ano % 4 == 0)
    {
      se (ano % 100 == 0)
      {
        se (ano % 400 == 0)
        {
          escreva("O ano digitado é um ano bissexto")
        }
        senao
        {
          escreva("O ano digitado não é um ano bissexto.")
        }
      }
      senao
      {
        escreva("O ano digitado é um ano bissexto.")
      }
    }
    senao
    {
      escreva("O ano digitado não é um ano bissexto.")
    }
  }
}
