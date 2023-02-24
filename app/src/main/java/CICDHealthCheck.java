import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.URL;
import java.security.SecureRandom;
import java.security.cert.X509Certificate;
import java.util.Date;

import javax.net.ssl.HostnameVerifier;
import javax.net.ssl.HttpsURLConnection;
import javax.net.ssl.SSLContext;
import javax.net.ssl.SSLSession;
import javax.net.ssl.TrustManager;
import javax.net.ssl.X509TrustManager;

public class CICDHealthCheck {

	static InputStream is;
	static BufferedReader br;
	static String data;
	public static void main(String[] args) 
	{
		int loopCount = 0;
		try
		{
			while(true)
			{
				loopCount++;
				/**
				if (loopCount%30=0)
				{
					System.out.println("=========sleep 30 seconds evenry 30 epoch========");
					Thread.sleep(1000);
				}**/
				callUrl();
				
				Thread.sleep(100);
			}
		}
		catch (Exception e)
		{
			e.printStackTrace();
		}

	}
	public static void callUrl() throws Exception 
	{
		String healthurl = "https://rolloutcicd.222.122.51.186.nip.io/cicddemo";
		
		URL url = new URL(healthurl);
		
		HttpsURLConnection httpsurlConnection = (HttpsURLConnection) url.openConnection();
		
		httpsurlConnection.setHostnameVerifier(new HostnameVerifier() {
			
			@Override
			public boolean verify(String hostname, SSLSession session) {
				// Ignore ssl verification
				return true;
			}
		});
		
		httpsurlConnection.setDoInput(true);
		httpsurlConnection.setUseCaches(false);
		httpsurlConnection.setReadTimeout(10000);
		httpsurlConnection.setConnectTimeout(10000);
		httpsurlConnection.setRequestMethod("GET");
		httpsurlConnection.setRequestProperty("HeaderKey", "HeaderValue");
		
		TrustManager[] trustAllcerts = new TrustManager[] {
				new X509TrustManager() {
					
					public X509Certificate[] getAcceptedIssuers() 
					{
						return null;
					}
					
					public void checkServerTrusted(X509Certificate[] chain, String authType) 
					{
						
					}
					
					public void checkClientTrusted(X509Certificate[] chain, String authType) 
					{
						
					}
				}
			};
		
		
		
		
		
		
		SSLContext context = SSLContext.getInstance("SSL");
		context.init(null, trustAllcerts, new SecureRandom()); // 무효화
		httpsurlConnection.setSSLSocketFactory(context.getSocketFactory());
		
		httpsurlConnection.connect();
		httpsurlConnection.setInstanceFollowRedirects(true);
		
		// is = url.openStream();
		
		is = httpsurlConnection.getInputStream();
		br = new BufferedReader(new InputStreamReader(is));
		
		while ((data=br.readLine())!= null)
		{
			if (data.indexOf("TmaxCloud ") > -1)
			{
			
				
			//<br><font size="4" color="black">
				
				data = data.replaceAll("<h1>", "");
				data = data.replaceAll("</h1><br>", "");
				
				System.out.println(new Date() +" "+ data.trim());
				
				
				
				break;
			}
			else
			{
				// System.out.println(data.indexOf("TmaxCloud POC") + " : " + data);
			}
		}
		
		
		try
		{
			
			br.close();
			is.close();
			//httpsurlConnection.disconnect();
		}
		catch (Exception e)
		{
			e.printStackTrace();
		}
	}
	
}
