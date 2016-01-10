<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Hello WOrld</title>
</head>
<body>
<%@ include file="header.jsp" %>
Hello World

<%!
public String hello() {
String msg = "Hello World";
return msg;
}
%>
<jsp:useBean id="user" class="helloworldjsp.user" />
<jsp:setProperty name="user" property="name" value="vishal" />
Hello&nbsp;<jsp:getProperty name="user" property="name" /> <br>
Message from <b>Scriptlet</b>: <%hello();%><br/> Message from <b>Expression</b>: <%=hello() %><br>
<%out.print("Inside main.jsp"); %><br/>
<jsp:include page="sub.jsp"/>
<!-- <jsp:forward page="sub.jsp"/> -->
</body>
</html>