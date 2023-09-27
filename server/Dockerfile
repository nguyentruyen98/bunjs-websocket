FROM ubuntu

WORKDIR /app

RUN apt-get update
RUN apt-get install -y curl
RUN apt-get install -y unzip
RUN curl -fsSL https://bun.sh/install | bash

ENV BUN_INSTALL="/root/.bun"
ENV PATH="$BUN_INSTALL/bin:$PATH"
RUN echo $HOME
RUN echo $PATH
RUN echo hihihi

RUN bun -v

COPY . .

RUN bun add ws

EXPOSE 8080

ENTRYPOINT ["bun", "index.ts"]
