package dev.syntax.step01helloservlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet(urlPatterns = "/servlets/fourth")
public class FourthServlet extends HttpServlet {
	
	

	@Override
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		response.setContentType("text/html");
		
		PrintWriter out = response.getWriter();
		
		out.println("<html>");
		out.println("<head>");
		out.println("<title>Hello Fourth World!</title>");
		out.println("</head>");
		out.println("<body>");
		out.println("<h1>Hello Fourth World!</h1>");
		out.println("</body>");
		out.println("</html>");
		
	}

	
	
}
