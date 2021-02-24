Connection con =null;
Statement stmt=null;
ResultSet rs=null;
String query="select Script from [formPage$]";

try{
    Class.forName("sun.jdbcodbc.JdbcOdbcDriver");
    con = DriverManager.getConnection("jdbc:Driver={Microsoft Excel Driver(*.xlsx)};DBQ=D://formPage with Count.xlsx");

    stmt=con.createStatement();
    rs=stmt.executeQuery(query);
    while(rs.next()){
        System.out.println(rs.getString("Script"));
    }
    con.close();
    rs.close();
    stmt.close();
} catch(Exception e){
    e.printStackTrace();
}
