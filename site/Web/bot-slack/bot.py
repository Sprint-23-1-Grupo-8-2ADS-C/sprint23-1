import requests
import json


mensagem = { "text" : "Olá, Bem Vindo ao BOT de ajuda ao usuário!"};
webhook = "https://hooks.slack.com/services/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";


import os


def processar_resposta(resposta, nome):
    if resposta == '1':
        print(f'{os.linesep}{nome} Pergunta 01.{os.linesep}')
    elif resposta == '2':
        print(f'{os.linesep}{nome} Pergunta 02.{os.linesep}')
    elif resposta == '3':
        print(f'{os.linesep}{nome}, Pergunta 03.{os.linesep}')
    elif resposta == '4':
        print(f'{os.linesep}{nome} Pergunta 04.{os.linesep}')
    else:
        print('Digite apenas 1, 2, 3 ou 4')


def start():
    # Apresentar o chatbot
    print('Olá! Bem-vindo.')
    # pedir o nome
    nome = input('Digite seu nome: ')
    # pedir o e-mail
    email = input('Digite seu e-mail: ')
    while True:
        # Oferer o menu de opções
        resposta = input(
            f'01?{os.linesep}[1] - 02?{os.linesep}[2] -?{os.linesep}[3] - 03?{os.linesep}[4] - 04?{os.linesep}')
        # Processar a resposta enviada
        processar_resposta(resposta, nome)


if __name__ == '__main__':
    start()

requests.post(webhook, data=json.dumps(mensagem, start));