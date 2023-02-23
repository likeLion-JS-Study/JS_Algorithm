def solution(n):
    pizza = 1
    while (pizza * 6) % n:
        pizza += 1
    return pizza