FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /app

COPY src/ ./src/
RUN dotnet publish --configuration Release --output ./build ./src/Server/Spektayt.Server.csproj

FROM mcr.microsoft.com/dotnet/aspnet:6.0
WORKDIR /app
COPY --from=build /app/build .
ENTRYPOINT ["dotnet", "Spektayt.Server.dll"]