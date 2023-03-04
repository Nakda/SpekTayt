using Microsoft.AspNetCore.SignalR;
using Spektayt.Shared;

namespace Spektayt.Server.Hubs;

public class ChatHub : Hub
{
    [HubMethodName(ChatOperation.Send)]
    public async Task SendMessage(string user, string message)
    {
        await Clients.Others.SendAsync(ChatOperation.Receive, user, message);
    }
}