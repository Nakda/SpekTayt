FROM mcr.microsoft.com/dotnet/sdk:6.0-alpine AS build
WORKDIR /app

COPY src/ ./src/
RUN dotnet publish --configuration Release --output ./build ./src/Server/Spektayt.Server.csproj

FROM mcr.microsoft.com/dotnet/aspnet:6.0-alpine
WORKDIR /app
COPY --from=build /app/build .
ENTRYPOINT ["dotnet", "Spektayt.Server.dll"]