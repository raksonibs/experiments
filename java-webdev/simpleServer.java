package helloworld;
import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class HelloWorld extends HttpServlet{

protected void doGet(HttpServletRequest request,
HttpServletResponse response)
{
try
{
response.setContentType("text/html");
PrintWriter printWriter = response.getWriter();
printWriter.println("<h2>");
printWriter.println("Hello World");
printWriter.println("</h2>");
}
catch (IOException ioException)
{
ioException.printStackTrace();
}
}

}