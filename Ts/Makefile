# **************************************************************************** #
#                                                                              #
#                                                         :::      ::::::::    #
#    Makefile                                           :+:      :+:    :+:    #
#                                                     +:+ +:+         +:+      #
#    By: jinyoo <jinyoo@student.42.fr>              +#+  +:+       +#+         #
#                                                 +#+#+#+#+#+   +#+            #
#    Created: 2023/01/27 16:02:28 by jinyoo            #+#    #+#              #
#    Updated: 2023/01/27 16:10:11 by jinyoo           ###   ########.fr        #
#                                                                              #
# **************************************************************************** #

all: run

run:
	docker build -t react .
	docker run -it --name ft_tscen_front -p 3000:3000 react


clean:
	docker rm ft_tscen_front

fclean: clean
	docker rmi react

re:
	$(MAKE) fclean
	$(MAKE) all

.PHONY: all clean fclean re