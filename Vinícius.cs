using System;

namespace NotasDoUsuario
{
    class Program
    {
        static void Main(string[] args)
        {
            string nomeDoUsuario = "Vinícius";
            Console.WriteLine("Bem-vindo, " + nomeDoUsuario + "!");

            double[] notas = new double[5];
            for (int i = 0; i < 5; i++)
            {
                notas[i] = 10;
            }

            double soma = 0;
            for (int i = 0; i < 5; i++)
            {
                soma += notas[i];
            }

            double media = soma / 5;
            Console.WriteLine("A média das suas notas é: " + media);
        }
    }
}
