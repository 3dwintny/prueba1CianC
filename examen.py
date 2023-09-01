def getCoins(monto):
    coins = [50, 20, 10, 5, 2, 1]  # Valores de las monedas en céntimos
    resultado = [0, 0, 0, 0, 0, 0]  # Inicializamos una lista para contar las monedas utilizadas
    coin_descriptions = ["50 céntimos", "20 céntimos", "10 céntimos", "5 céntimos", "2 céntimos", "1 céntimo"]

    for i in range(len(coins)):
        while monto >= coins[i]:
            monto -= coins[i]  # Restamos el valor de la moneda actual de la cantidad restante
            resultado[i] += 1  # Incrementamos el contador de monedas utilizadas

    coin_result = [f"{resultado[i]} {coin_descriptions[i]}" for i in range(len(resultado)) if resultado[i] > 0]

    return f"getCoins({monto}) // [{', '.join(map(str, resultado))}] -> {' -> '.join(coin_result)}"

print(getCoins(51))
print(getCoins(3))
print(getCoins(5))
print(getCoins(16))
print(getCoins(98))
